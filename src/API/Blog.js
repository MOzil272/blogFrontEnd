import APICategory from './ApiCategory';

class Blog extends APICategory {

  getBlog() {
    return this.client.get('blog/all');
  }

}

export default Blog;
