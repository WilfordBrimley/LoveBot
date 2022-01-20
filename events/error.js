module.exports = async (client, error) => {
  console.error(client.tree.asTree(error, true, true));
};