const url = $request.url;
const newUrl = new URL(url);

// 排除 /images 路径
const isImageRequest = /\/3\/tv\/\d+\/images/.test(url);

if (!isImageRequest) {
  // 修改语言为中文
  newUrl.searchParams.set('language', 'zh-CN');
  // 解锁成人内容
  newUrl.searchParams.set('include_adult', 'true');
}

$done({ url: newUrl.toString() });
