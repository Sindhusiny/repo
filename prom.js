function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post creation
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous activity update
      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post deletion
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function performPostOperations() {
    const posts = [];
  
    const createPostPromise = createPost('New post')
      .then(post => {
        posts.push(post);
        console.log('Post created:', post);
        return post;
      });
  
    const updateLastActivityPromise = updateLastUserActivityTime()
      .then(lastActivityTime => {
        console.log('Last activity time:', lastActivityTime);
        return lastActivityTime;
      });
  
    Promise.all([createPostPromise, updateLastActivityPromise])
      .then(([post, lastActivityTime]) => {
        const deletionPromise = deletePost(post);
  
        deletionPromise.then(deletedPost => {
          const updatedPosts = posts.filter(p => p !== deletedPost);
          console.log('Posts after deletion:', updatedPosts);
        });
      });
  }
  
  performPostOperations();
  