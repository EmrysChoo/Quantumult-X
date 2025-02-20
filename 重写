const url = $request.url;
const newUrl = new URL(url);

// 修改语言为中文
newUrl.searchParams.set('language', 'zh-CN');

// 解锁成人内容
newUrl.searchParams.set('include_adult', 'true');

$done({ url: newUrl.toString() });
