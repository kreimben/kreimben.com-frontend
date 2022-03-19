export async function get() {
  const res = await fetch('https://api.kreimben.com/get_photos');
  const json = await res.json();

  const list = json["content"];
  let url = [];

  list.forEach((file_name) => {url.push(`https://api.kreimben.com/get_photo/${file_name}`)});

  return { body: url};
}
