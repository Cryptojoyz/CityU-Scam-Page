import { fetchanalysis } from './fetchcontent.js';  // 修改为你的js文件的实际路径

const testFetchAnalysis = async () => {
  try {
    const result = await fetchanalysis();
    console.log(result.length);

  } catch (error) {
    console.error('Error fetching analysis:', error);
  }
};

testFetchAnalysis();
