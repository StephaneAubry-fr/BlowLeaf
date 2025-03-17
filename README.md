# BlowLeaf

- Demo springboot angular

        $FIREFOX_BIN
        
        run test
        sudo apt install libcanberra-gtk-module libcanberra-gtk3-module
        
        sudo npm install -g @angular/cli
        sudo npm install -g karma
        
        ng test --include='**/model/*.spec.ts'


- spec.ts : NullInjectorError: No provider for HttpClient!

        import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
        [...]

        await TestBed.configureTestingModule({
        imports: [BlowCtrlComponent, HttpClientTestingModule]
        })
        .compileComponents();

- curl

        curl --header "Content-Type: application/json" \
        --request POST \
        --data '{"width":"2","height":"3","squares":[[1,0],[5,3],[4,5]]}' \
        http://localhost:8080/blow/right
