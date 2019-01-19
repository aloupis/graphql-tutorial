import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466"
});

export { prisma as default };

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });

//   if (!userExists) {
//     throw Error("User not found!");
//   }

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId
//           }
//         }
//       }
//     },
//     "{ author {id name email posts{id title published}}}"
//   );

//   return post.author;
// };

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) {
//     throw new Error("Post does not exist!");
//   }
//   const post = await prisma.mutation.updatePost(
//     {
//       where: { id: postId },
//       data
//     },
//     "{ author {id name email posts{id title body published}} }"
//   );

//   return post.author;
// };

// updatePostForUser("cjqtjn3xf00110a31bfmlfvn1", {
//   title: "GraphQl updated",
//   body: `Updated graphql at ${new Date()} !!`
// })
//   .then(user => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch(error => console.log(error.message));

// createPostForUser("cjqt9u4zp001n0a31n96vixdz", {
//   title: "GreatBooks to Read",
//   body: "The war of art",
//   published: true
// })
//   .then(user => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
