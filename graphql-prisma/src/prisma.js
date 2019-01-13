import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466"
});

const createPostForUser = async (authorId, data) => {
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    "{ id title body author { id name }}"
  );

  const user = await prisma.query.user(
    { where: { id: authorId } },
    "{id name email posts{id title published}}"
  );
  return user;
};

const updatePostForUser = async (postId, data) => {
  const post = await prisma.mutation.updatePost(
    {
      where: { id: postId },
      data
    },
    "{ author { id } }"
  );

  const user = await prisma.query.user(
    { where: { id: post.author.id } },
    "{id name email posts{id title published}}"
  );
  return JSON.stringify(user);
};

// updatePostForUser("cjqtjn3xf00110a31bfmlfvn1", {
//   title: "GraphQl updated",
//   body: `Updated graphql at ${new Date()} !!`
// }).then(user => {
//   console.log(JSON.stringify(user, undefined, 2));
// });

// createPostForUser("cjqt9u4zp001n0a31n96vixdz", {
//   title: "GreatBooks to Read",
//   body: "The war of art",
//   published: true
// }).then(user => {
//   console.log(JSON.stringify(user, undefined, 2));
// });
