// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateThread = `subscription OnCreateThread {
  onCreateThread {
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
export const onUpdateThread = `subscription OnUpdateThread {
  onUpdateThread {
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
export const onDeleteThread = `subscription OnDeleteThread {
  onDeleteThread {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
