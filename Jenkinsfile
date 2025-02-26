pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/neroIJN/Travel_booking_site'
                }
                // Debugging: List files in the workspace
                bat "dir /s"
            }
        }
        stage('Build Docker Image') {
            steps {  
                dir('movie-app') { // Navigate to the movie-app directory
                    bat "docker build -t itznero/next-travel:${BUILD_NUMBER} ."
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'Docker_hub', variable: 'test_docker')]) {
                    bat "docker login -u itznero -p %test_docker%"
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
