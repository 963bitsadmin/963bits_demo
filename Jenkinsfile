pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/963bitsadmin/963bits_demo', branch: 'development')
      }
    }

    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'docker build -f Dockerfile -t marvel .'
          }
        }

        stage('stage2') {
          steps {
            sh 'ls -ltrh'
          }
        }

      }
    }

  }
}