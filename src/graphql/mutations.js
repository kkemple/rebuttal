// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    bio
    followers {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    following {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
    categories {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    bio
    followers {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    following {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
    categories {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    bio
    followers {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    following {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
    categories {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    title
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    title
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    title
    threads {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const createThread = `mutation CreateThread($input: CreateThreadInput!) {
  createThread(input: $input) {
    id
    category {
      id
      title
      threads {
        nextToken
      }
    }
    posts {
      items {
        id
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
export const updateThread = `mutation UpdateThread($input: UpdateThreadInput!) {
  updateThread(input: $input) {
    id
    category {
      id
      title
      threads {
        nextToken
      }
    }
    posts {
      items {
        id
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteThread = `mutation DeleteThread($input: DeleteThreadInput!) {
  deleteThread(input: $input) {
    id
    category {
      id
      title
      threads {
        nextToken
      }
    }
    posts {
      items {
        id
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      nextToken
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    video {
      bucket
      region
      key
    }
    creator {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    thread {
      id
      category {
        id
        title
      }
      posts {
        nextToken
      }
      owner {
        id
        username
        bio
      }
      createdAt
      updatedAt
    }
    upvotes
    downvotes
    comments {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    video {
      bucket
      region
      key
    }
    creator {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    thread {
      id
      category {
        id
        title
      }
      posts {
        nextToken
      }
      owner {
        id
        username
        bio
      }
      createdAt
      updatedAt
    }
    upvotes
    downvotes
    comments {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    video {
      bucket
      region
      key
    }
    creator {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    thread {
      id
      category {
        id
        title
      }
      posts {
        nextToken
      }
      owner {
        id
        username
        bio
      }
      createdAt
      updatedAt
    }
    upvotes
    downvotes
    comments {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    text
    post {
      id
      video {
        bucket
        region
        key
      }
      creator {
        id
        username
        bio
      }
      thread {
        id
        createdAt
        updatedAt
      }
      upvotes
      downvotes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    text
    post {
      id
      video {
        bucket
        region
        key
      }
      creator {
        id
        username
        bio
      }
      thread {
        id
        createdAt
        updatedAt
      }
      upvotes
      downvotes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    text
    post {
      id
      video {
        bucket
        region
        key
      }
      creator {
        id
        username
        bio
      }
      thread {
        id
        createdAt
        updatedAt
      }
      upvotes
      downvotes
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
    owner {
      id
      username
      bio
      followers {
        id
        username
        bio
      }
      following {
        id
        username
        bio
      }
      threads {
        nextToken
      }
      categories {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
`;
