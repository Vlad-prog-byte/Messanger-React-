let state = {
    profilePage : {
        posts : [
            {
                id : 1,
                src : "https://avatars.mds.yandex.net/i?id=9ef7f2ab0d23efbca0b4940ba044e0d0-4477047-images-thumbs&n=13",
                like : 7,
                post : "It is my first post"
            },
            {
                id : 2,
                src : "https://avatars.mds.yandex.net/i?id=cede65bd2bac1c361c8ec2897715ad6e-5487767-images-thumbs&n=13",
                like : 1,
                post : "That is cool"
            },
            {
                id : 3,
                src : "https://avatars.mds.yandex.net/i?id=a594dab7e4a9a230100d260bc05bef0831047580-6947142-images-thumbs&n=13",
                like : 0,
                post : "It is amazing"
            },
            {
                id : 4,
                src : "https://avatars.mds.yandex.net/i?id=59697cae4758f4c9699d34fb8ed91ca54a41b365-5512866-images-thumbs&n=13",
                like : 20,
                post : "Is it you?"
            },
            {
                id : 5,
                src : "https://avatars.mds.yandex.net/i?id=1ce5b0a556b8edb4e3ffb1eb859bd6cadceb3b3e-5858852-images-thumbs&n=13",
                like : 15,
                post : "Youh mannnn"
            }
        ]
    },
    messagePage : {
    dialogs : [
        {name : "Vlad", id : "1"},
        {name : "Anton", id : "2"},
        {name : "Grisha", id : "3"},
        {name : "Ilya", id : "4"},
        {name : "Sergey", id : "5"},
        {name : "Anna", id : "6"}
    ],
    messages : [
        {message : "Hello"},
        {message : "Nice to meet you"},
        {message : "I am glad meet you"},
        {message : "I am too"},
        {message : "How are you guys?"},
        {message : "I am fine"}
    ]
    }
}

let newId = 6;
let defaultPcr = "https://avatars.mds.yandex.net/i?id=e28c75e3bf7212dc572265f11090afcd-5175337-images-thumbs&n=13";

export let addPost = (postMessage) => {
    let newPost = {
        id : newId,
        src : defaultPcr,
        like : 0,
        post : postMessage
    }
    state.profilePage.posts.push(newPost);
    newId++;
    debugger;
}


export default state;