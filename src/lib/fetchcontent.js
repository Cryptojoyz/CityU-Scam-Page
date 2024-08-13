import { unstable_noStore as noStore} from 'next/cache';
import fs from 'fs';

export const fetchMethod = async () => {
    // noStore();
    let data = fs.readFileSync('/root/cityuscampage/CityU-Scam-Page/src/datatext/methodology.txt', 'utf8');
    data = data.replace(/^## METHODOLOGY\s*\n*/, '');
    return data;
}

export const fetchMethodzh = async () => {
    // noStore();
    const data = fs.readFileSync('/root/cityuscampage/CityU-Scam-Page/src/datatext/methodologyzh.txt', 'utf8');
    return data;
}

export const fetchanalysis = async () => {
    noStore();
    const data = fs.readFileSync('/var/www/html/analysis_results2/final_analysis.txt', 'utf8');
    const cleanedMarkdown = data.replace(/---\n/g, '')
    const questionTitleMatch = cleanedMarkdown.match(/(#+)\s+.*How/i);
    if (!questionTitleMatch) {
        throw new Error('Question title not found');
    }
    const hashCount = questionTitleMatch[1].length;  // 获取 `#` 号数量
    const splitPattern = new RegExp(`\\n#{${hashCount}}\\s+`, 'g');  // 创建正则表达式，按相同数量的 `#` 号分割
    const parts = cleanedMarkdown.split(splitPattern);
    return parts;
}

export const fetchanalysiszh = async () => {
    noStore();
    const data = fs.readFileSync('/var/www/html/zh.txt', 'utf8');
    const cleanedMarkdown = data.replace(/---\n/g, '')
    const questionTitleMatch = cleanedMarkdown.match(/^(#+).*\d+.*\n/m);
    if (!questionTitleMatch) {
        throw new Error('Question title not found');
    }
    const hashCount = questionTitleMatch[1].length;  // 获取 `#` 号数量
    const splitPattern = new RegExp(`\\n#{${hashCount}}\\s+`, 'g');  // 创建正则表达式，按相同数量的 `#` 号分割
    const parts = cleanedMarkdown.split(splitPattern);
    return parts;
}


export const fetchcontent = async () => {
    // noStore();
    const data = fs.readFileSync('/root/cityuscampage/CityU-Scam-Page/src/datatext/typicalcase.txt', 'utf8');
    const cases = data.trim()
    return cases;
}

export const fetchcontentzh = async () => {
    // noStore();
    const data = fs.readFileSync('/root/cityuscampage/CityU-Scam-Page/src/datatext/typicalcasezh.txt', 'utf8');
    const cases = data.trim()
    return cases;
}


