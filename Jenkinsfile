pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/963bitsadmin/963bits_demo', branch: 'development')
      }
    }

    stage('Stop/Remove Docker') {
      steps {
        sh 'docker stop marvel && docker rm marvel'
      }
    }

    stage('Docker RMI') {
      steps {
        sh 'docker rmi marvel'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -f Dockerfile -t marvel .'
      }
    }

    stage('Docker Run') {
      steps {
        sh 'docker run -d -p 5173:5173 --name marvel marvel'
      }
    }

  }
}