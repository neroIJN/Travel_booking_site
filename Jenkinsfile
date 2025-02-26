pipeline {
    agent any 

    stages { 
        stage('SCM Checkout') {
            steps {
                script {
                    try {
                        retry(3) {
                            git branch: 'main', url: 'https://github.com/neroIJN/Travel_booking_site'
                        }
                    } catch (Exception e) {
                        echo "Git checkout failed after 3 attempts."
                        error("Stopping pipeline.")
                    }
                }
                // Debugging: List files in the workspace
                bat "dir /s"
            }
        }
        stage('Build Docker Image') {
            steps {  
                script {
                    bat "docker build -t itznero/next-travel:${BUILD_NUMBER} ."
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'Docker_hub', variable: 'test_docker')]) {
                    script {
                        def loginStatus = bat(returnStatus: true, script: "docker login -u itznero -p '%test_docker%'")
                        if (loginStatus != 0) {
                            error("Docker login failed! Stopping pipeline.")
                        }
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat "docker push itznero/next-travel:${BUILD_NUMBER}"
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
