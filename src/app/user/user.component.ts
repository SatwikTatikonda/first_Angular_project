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

import { Component,Input,input,computed,Output, EventEmitter,output} from "@angular/core";
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
    // way 1 - input without using signals
    @Input({required:true}) id!: string;
    @Input({required:true}) avatar!: string;
    @Input({ required: true }) name!: string;


    // way2 - input using read-only signals
    // We prefer this apporach as signals help to notify the changes in the data to intended parts of the application
    // avatar = input.required<string>();
    // name = input.required<string>();

    
    // way`1` of using output
    // @Output() selectedUser = new EventEmitter();

    // way`2` of using output
    select = output<string>();




    // imagePath =computed(() => 'assets/users' + this.avatar);



    get imagePath() {
        return 'assets/users' + this.avatar;
    };
    
    onSelectedUser() {

        // way1 of using output
        // this.selectedUser.emit(this.id);

        // way2 of using output
        this.select.emit(this.id);

    }

}
    
