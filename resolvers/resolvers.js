const resolvers = {

    Query : {

        async user(root,{id}) {

        },

        async allUsers(root) {
        
        },
        
        async allReceipe(root) {

        },

        async receipe(root,{id}) {

        },  

    },

    Mutation : {

        async createUser(root,{name,email,password},{models}) {
            return models.User.create({
                name,
                email,
                password
            })
        },

        async createReceipe(root,{userId,title,ingredients,direction},{models}){
            return models.Receipe.create({userId,title,ingredients,direction})
        }
    }
}