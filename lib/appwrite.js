
import { Client,ID,Account, Avatars, Databases, Query } from 'react-native-appwrite';
export const awconfig = {
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.native.aora",
    projectId:"66a0f0d6002c0347d763",
    databaseId:"66a0f2c10031c2d450ea",
    userCollectionId:"66a0f3050007da4d142b",
    videoCollectionId:"66a0f4570008ad0e71b9",
    storageId:"66a0f5690033016a6e8c"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(awconfig.endpoint) 
    .setProject(awconfig.projectId) // Your project ID
    .setPlatform(awconfig.platform) // Your application ID or bundle ID.

;
const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createUser = async (username,email,password)=>{

// Register User
   try {

        const newAccount = await account.create(ID.unique(),email,password,username);

        console.log(newAccount)

        if(!newAccount) throw new Error;


        const avatarUrl = avatar.getInitials(username);
        // console.log(avatarUrl)

        await signIn(email,password);

        const newUser = database.createDocument(
            awconfig.databaseId,
            awconfig.userCollectionId,
            ID.unique(),
            {
                accountId : newAccount.$id,
                email,
                username,
                avatar:avatarUrl

            }

        )

        return newUser;
       
    
   } catch (error) {
        console.log(error)
        throw new Error(error)
   }
//    const account = new Account(client);

// // // Register User
// // account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
// // .then(function (response) {
// //     console.log(response);
// // }, function (error) {
// //     console.log(error);
// // });


}

export const signIn = async (email,password)=>{
        
            try {
                // Check for active session
                try {
                  const activeSession = await account.getSession('current');
                  if (activeSession) {
                    // Delete active session if it exists
                    await account.deleteSession('current');
                  }
                } catch (error) {
                  // No active session
                  console.log('No active session found:', error);
                }
          
                // Create new session
                const session = await account.createEmailPasswordSession(email, password);
              
                console.log('User logged in successfully:', session);
            
            
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
        
}

export const getCurrentUser = async ()=>{

    const currAccount = await account.get();
   

    if(!currAccount) throw new Error

    const currUser = await database.listDocuments(
        awconfig.databaseId,
        awconfig.userCollectionId,
        [Query.equal('accountId',currAccount.$id)]
    )

    if(!currUser) throw new Error

    return currUser.documents[0];
     
}

export const searchPosts = async(query)=>{
    try {
        const posts = await database.listDocuments(
            awconfig.databaseId,
            awconfig.videoCollectionId,
            [Query.search("title",query)]
        )
        console.log(posts)
        return posts
    } catch (error) {
        console.log(error)
    }
}
export const getLatestPosts = async()=>{
    try {
        const posts = await database.listDocuments(
            awconfig.databaseId,
            awconfig.videoCollectionId,
            [Query.orderDesc("$createdAt",Query.limit(7))]
        )
        
        return posts
    } catch (error) {
        console.log(error)
    }
}
export const getAllPosts = async()=>{
    try {
        const posts = await database.listDocuments(
            awconfig.databaseId,
            awconfig.videoCollectionId
        )
        // console.log(posts)
        return posts
    } catch (error) {
        console.log(error)
    }
}

export const userPosts = async(user)=>{
    try {
        const posts = await database.listDocuments(
            awconfig.databaseId,
            awconfig.videoCollectionId,
            [Query.equal('users',user)]
        )
        console.log(posts)
        return posts
    } catch (error) {
        console.log(error)
    }
}
export const signOut = async()=>{
    try {
        const session = await account.deleteSession('current')

        
        return session
    } catch (error) {
        console.log(error)
    }
}


