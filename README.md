# BlowLeaf
- Une application ludique pour voir les bases de dev front angular et les webservices sous spring-boot
- Back spring boot
    
  
    cd BlowLeafSCV
    mvn clean package spring-boot:repackage install 
    mvn test
    java -jar ./target/BlowLeafSVC-*.jar

- Front Angular

    
    cd BlowLeafFront
    npm install
    npm test
    npm start

- Build Angular

    
    cd BlowLeafFront
    npm install 
    ng build --aot
    angular-http-server -p 4200 --path ./dist/blow-leaf-front/browser


- Deployer ansible

        ansible-playbook -i inventory.ini playbook-blowleaf.yml

