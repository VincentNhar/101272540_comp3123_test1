const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = { message: 'delayed success!' };
        resolve(success);
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error(`{ error: 'delayed exception!' }`);
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  };
  
  resolvedPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
  rejectedPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });