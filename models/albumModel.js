// models/albumModel.js
class Album {
    constructor(id, artistId, title, cover) {
      this.id = id;
      this.artistId = artistId;
      this.title = title;
      this.cover = cover;
    }
  }
  
  module.exports = Album;
  