function getHeight(root) {
  if (root === null) {
    return -1;
  } else {
    return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
  }
}
