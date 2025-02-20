const url = $request.url;
const newUrl = new URL(url);

// 排除所有图片请求（单张和批量）
const isImageRequest = /\/3\/(tv|movie)\/\d+\/(image|images)/.test(url);

if (!isImageRequest) {
  newUrl.searchParams.set('language', 'zh-CN');
  newUrl.searchParams.set('include_adult', 'true');
}

$done({ url: newUrl.toString() });
