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

  }
}