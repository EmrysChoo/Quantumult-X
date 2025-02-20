const url = $request.url;
if (url.includes("forwardinfo.vvebo.vip/api/movie")) {
  let body = $response.body;
  try {
    let obj = JSON.parse(body);
    // 插入 adult 字段
    if (obj && !obj.adult) {
      obj.adult = true; // 强制标记为成人内容
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("JSON解析失败: " + e);
    $done({});
  }
} else {
  $done({});
}
