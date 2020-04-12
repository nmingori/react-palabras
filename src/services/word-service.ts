import words_frutas from '../data/words_frutas_verduras.json';
import words_objetos from '../data/words_objetos.json';
import words_animales from '../data/words_animales.json';
import words_eng_body_parts from '../data/words_eng_body_parts.json';
import words_eng_colours from '../data/words_eng_colours.json';
import words_eng_days_of_the_week from '../data/words_eng_days_of_the_week.json';
import {Categories} from '../components/menu';

export interface Word {
    word: string;
    translate?: string;
}

export class WordService {
    _getWordsListByCaterogy(category: Categories): Word[] {
        let wordsList: Word[] = [];

        switch (category) {
            case Categories.FRUTAS:
                wordsList = words_frutas.words;
                break;
            case Categories.OBJETOS:
                wordsList = words_objetos.words;
                break;    
            case Categories.ANIMALES:
                wordsList = words_animales.words;
                break;
            case Categories.ENG_BODY_PARTS:
                wordsList = words_eng_body_parts.words;
                break;
            case Categories.ENG_COLOURS:
                wordsList = words_eng_colours.words;
                break;
            case Categories.ENG_DAYS_OF_THE_WEEK:
                wordsList = words_eng_days_of_the_week.words;
                break;
        }

        return wordsList;
    }

    getWordByCategory(category: Categories): Word {
        let words: Word[] = this._getWordsListByCaterogy(category);
        return words[Math.floor(Math.random() * words.length)];
    }
}