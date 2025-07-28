// 获取当前请求的URL
const url = $request.url;
// 创建一个URL对象以便操作
const newUrl = new URL(url);

// 判断是否为图片元数据请求（TMDB API中的图片信息请求，如电影/电视剧的图片列表）
const isImageMetaRequest = /\/3\/(tv|movie)\/\d+\/(image|images)/.test(url);

// 判断是否为实际的图片资源请求（包括各种尺寸的图片和常见图片格式）
const isImageResource = 
    // 匹配常见的图片格式扩展名（忽略大小写），允许后面有查询参数
    /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(url) || 
    // 或者URL中包含TMDB图片CDN的特有路径（image.tmdb.org/t/p/）
    url.includes('image.tmdb.org/t/p/');

// 如果既不是图片元数据请求，也不是实际图片资源请求，则进行参数添加
if (!isImageMetaRequest && !isImageResource) {
    // 设置语言为简体中文
    newUrl.searchParams.set('language', 'zh-CN');
    // 包含成人内容
    newUrl.searchParams.set('include_adult', 'true');
}

// 完成并返回新的URL
$done({ url: newUrl.toString() });
