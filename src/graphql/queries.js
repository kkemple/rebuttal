// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      threads {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getThread = `query GetThread($id: ID!) {
  getThread(id: $id) {
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
export const listThreads = `query ListThreads(
  $filter: ModelThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      post {
        id
        upvotes
        downvotes
        createdAt
        updatedAt
      }
      owner {
        id
        username
        bio
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const searchCategorys = `query SearchCategorys(
  $filter: SearchableCategoryFilterInput
  $sort: SearchableCategorySortInput
  $limit: Int
  $nextToken: Int
) {
  searchCategorys(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      threads {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchThreads = `query SearchThreads(
  $filter: SearchableThreadFilterInput
  $sort: SearchableThreadSortInput
  $limit: Int
  $nextToken: Int
) {
  searchThreads(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
