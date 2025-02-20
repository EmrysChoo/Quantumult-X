const url = $request.url;
const newUrl = new URL(url);

// 仅针对需要参数的路径（如搜索、发现、电影/剧集详情）
const needModify = /\/3\/(discover|search|movie|tv)\//.test(url);

if (needModify) {
  // 修改语言为中文
  newUrl.searchParams.set('language', 'zh-CN');
  // 解锁成人内容
  newUrl.searchParams.set('include_adult', 'true');
}

$done({ url: newUrl.toString() });
