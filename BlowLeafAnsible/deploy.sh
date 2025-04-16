#!/bin/bash

ssh-add ~/.ssh/github

rm -rf ~/jenkins-deploy
mkdir ~/jenkins-deploy

cd ~/jenkins-deploy
git clone -b main --depth 1 --single-branch git@github.com:StephaneAubry-fr/BlowLeaf.git ./

cd BlowLeafAnsible
ansible-playbook -i inventory.ini playbook-blowleaf.yml
