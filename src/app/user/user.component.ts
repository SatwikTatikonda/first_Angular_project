// code till lecture 28

// import { Component ,computed,signal} from "@angular/core";
// import { DUMMY_USERS } from "../dummy-users";

// const randomIndex= Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//     selector: "app-user",
//     standalone: true,
//     templateUrl: "./user.component.html",
//     styleUrl: "./user.component.css",
//     imports: []
// })  

// export class userComponent {

//     title = "first-angular-app";
//     selectedUser = signal(DUMMY_USERS[randomIndex]);

//     // usingSignals
//     // imagePath=computed(()=> 'src/assets/users' + this.selectedUser().avatar)


//     // without signals
//     // get imagePath() {
//     //     return 'src/assets/users' + this.selectedUser.avatar;
//     // };

//     onSelectedUser() { 
//         console.log('User selected: ', this.selectedUser().name);
//         const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//         this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     }



// }

// after lecture 28

import { Component,Input} from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";


@Component({
    selector: "app-user",
    standalone: true,
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css",
    imports: []
})  

export class userComponent {

    title = "first-angular-app";
    @Input() avatar!: string;
    @Input() name!: string;

    get imagePath() {
        return 'assets/users' + this.avatar;
    };

    onSelectedUser() {
        
    }

}
    
