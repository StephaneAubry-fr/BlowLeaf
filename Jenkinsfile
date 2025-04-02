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
                            nodejs(nodeJSInstallationName:'NodeJS23', configId:'0b0fb0b4-046f-41df-ae52-2ab44067a07d') {
                                sh 'npm config fix'
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
                            nodejs(nodeJSInstallationName:'NodeJS23', configId:'0b0fb0b4-046f-41df-ae52-2ab44067a07d') {
                                sh 'npm config fix'
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
                            jf 'mvn install'
                       }
                    }
                }

                stage('Publish npm') {
                    steps {
                        dir('BlowLeafFront') {
                            nodejs(nodeJSInstallationName:'NodeJS23', configId:'0b0fb0b4-046f-41df-ae52-2ab44067a07d') {
                                sh 'npm config fix'
                                sh 'npm publish'
                            }
                        }
                    }
                }
            }
        }
    }
}