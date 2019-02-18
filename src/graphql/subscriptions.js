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
        name
        icon
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
        name
        icon
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
        name
        icon
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
export const onUpdateThread = `subscription OnUpdateThread {
  onUpdateThread {
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
export const onDeleteThread = `subscription OnDeleteThread {
  onDeleteThread {
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
