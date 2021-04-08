function ImageGrid() {
  const urls = [
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0c3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1541425353346-6755ab2da592?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594201272716-9ad78d16848b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0c3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1444460381791-02e0621c12f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1602248731696-08bc19621f8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGFydHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1597758464605-aa125b827c33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGFydHN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
  ];
  return (
    <div className="imageGrid">
      {urls.map((url, index) => (
        <img src={url} alt={index} key={index} />
      ))}
    </div>
  );
}
export default ImageGrid;
