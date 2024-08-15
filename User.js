class User {
    construcror(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if (this.email === email && this.password === password){
            console.log(`${this.fullname}: login sucess!`)
        } else {
            console.log(`${this.fullname}: login failed!`)
        }
    }
}

const john = new User('John', 'john@email.com', '1234')

john.login('john@email.com', '1234')
