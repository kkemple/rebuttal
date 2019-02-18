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
        name
        icon
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
export const getThread = `query GetThread($id: ID!) {
  getThread(id: $id) {
    id
    category {
      id
      name
      icon
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
        name
        icon
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
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
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
export const searchCategories = `query SearchCategories(
  $filter: SearchableCategoryFilterInput
  $sort: SearchableCategorySortInput
  $limit: Int
  $nextToken: Int
) {
  searchCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      icon
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
        name
        icon
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
