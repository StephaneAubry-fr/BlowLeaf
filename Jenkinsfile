pipeline {
    agent any

    tools {
        maven "Maven3"
        nodejs "NodeJS23"
        jfrog 'jfrog-cli'
    }

    stages {
        stage('Preparation') {
            steps {
                git branch: 'main',
                    credentialsId: params.GitHubCred,
                    url: 'git@github.com:StephaneAubry-fr/BlowLeaf.git'
            }

        }

        stage('Build') {
            parallel {
                stage('Build maven') {
                    steps {
                        dir('BlowLeafSVC') {
                            jf 'mvn clean compile'
                       }
                    }
                }

                stage('Build npm') {
                    steps {
                        dir('BlowLeafFront') {
                            withNPM(npmrcConfig: 'fixvid-npmrc') {
                                sh 'npm install'
                            }
                        }
                    }
                }
            }
        }

        stage('Test') {
            parallel {
                stage('Test maven') {
                    steps {
                        dir('BlowLeafSVC') {
                            jf 'mvn test'
                       }
                    }
                }

                stage('Test npm') {
                    steps {
                        dir('BlowLeafFront') {
                            withNPM(npmrcConfig: 'fixvid-npmrc') {
                                sh 'npm test'
                            }
                        }
                    }
                }
            }
        }

        stage('Publish') {
            parallel {
                stage('Publish maven') {
                    steps {
                        dir('BlowLeafSVC') {
                            jf 'mvn package spring-boot:repackage install'
                       }
                    }
                }

                stage('Publish npm') {
                    steps {
                        dir('BlowLeafFront') {
                            withNPM(npmrcConfig: 'fixvid-npmrc') {
                                script {
                                    def PACKAGE_VERSION = sh(returnStdout: true, script: 'node -p -e \"require(\'./package.json\').version\"').replaceAll("[\\n ]", "")
                                    def PACKAGE_NAME    = sh(returnStdout: true, script: 'node -p -e \"require(\'./package.json\').name\"').replaceAll("[\\n ]", "")
                                    def PUBLISHED_VERSIONS = sh(returnStdout: true, script: 'npm view ' + PACKAGE_NAME + ' versions')

                                    if(PUBLISHED_VERSIONS.contains(PACKAGE_VERSION)) {
                                        echo "Version " + PACKAGE_VERSION + " already published"
                                    } else {
                                        echo "Publishing Version " + PACKAGE_VERSION
                                        sh 'npm publish --access public'
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

        stage('Deploy') {
            steps {
                dir('BlowLeafAnsible') {
                    withCredentials([sshUserPrivateKey(credentialsId: 'deployer', usernameVariable: 'userName', keyFileVariable: 'identity', passphraseVariable: '')]) {
                         script {
                            def remote = [:]
                            remote.name = "toolbox"
                            remote.host = "10.0.2.11"
                            remote.allowAnyHosts = true
                            remote.user = userName
                            remote.identityFile = identity

                            sshCommand remote: remote, command: 'uname -n'
                            sshScript remote: remote, script: "deploy.sh"
                         }
                    }

               }
            }
        }
    }
}