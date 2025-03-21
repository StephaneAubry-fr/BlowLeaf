pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "Maven3"
        nodejs "NodeJS23"
        jfrog 'jfrog-cli'
    }

    stages {
        stage('Preparation') {
            steps {
                //echo 'download git project'
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
                            echo 'Build maven'

                            /*
                            script{
                                def LS_RETURN = sh(script: 'ls -ail', returnStdout: true)
                                echo LS_RETURN
                            }
                            */

                           /* script {
                                def MVN_STDOUT = sh( script: 'mvn -Dmaven.test.failure.ignore=true clean package', returnStdout: true)
                                echo MVN_STDOUT
                            }*/

                            jf 'mvn clean package'

                       }
                    }
                }

                stage('Build npm') {
                    steps {
                        dir('BlowLeafFront') {
                            echo 'Build npm'
                            nodejs('NodeJS23') {
                                script {
                                    def NPM_STDOUT = sh(script:'npm install', returnStdout: true)
                                    echo NPM_STDOUT
                                }
                            }
                        }
                    }
                }


            }
        }
    }
}