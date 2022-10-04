import { Button, IconButton, Typography } from "@mui/material";
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './ArticlePage.scss';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PhotoCamera } from "@mui/icons-material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Comments from "../../components/Comments/Comments";

function ArticlePage() {
    return (
        <div className="article-page">
            <div className="article-page__header">
                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Заголовок
                </Typography>
                <Typography>
                    02 октября, 23:59
                </Typography>
                <div className="article-page__author">
                    <Avatar className="article-page__author-avatar">
                        H
                    </Avatar>
                    <Typography>
                        Сергей Глазьев, академик РАН
                    </Typography>
                </div>
            </div>
            <Typography
                variant="h6"
                gutterBottom
                className="article-page__content"
            >
                Без инвестиций не может быть экономического роста, а без кредита не получится профинансировать необходимый для расширенного воспроизводства экономики объем инвестиций. В современной рыночной экономике именно банковский кредит выполняет функцию авансирования экономического роста. Соответственно, чем быстрее развивается экономика, тем выше ее кредитоемкость. Например, отношение кредита к ВВП в Китае составляет более 150%, в Японии – более 200%. В России же этот показатель менее 50% ВВП. Доля кредита в финансировании инвестиций составляет 15% по сравнению с 50–70% в странах-лидерах. То есть подавляющая часть инвестиций в основной капитал финансируется за счет собственных средств предприятий, что обеспечивает лишь простое воспроизводство экономики.
                Необходимые для развития собственные средства имеют только экспортно ориентированные предприятия добывающей промышленности и химико-металлургического комплекса, что предопределяет сырьевую ориентацию развития российской экономики. Они же могли делать относительно дешевые займы за рубежом. В ситуации, когда ЦБ ограничивает внутренний кредит, экономика автоматически переориентируется на спрос и источники кредита за
            </Typography>


            <Comments />
        </div>
    );
}

export default ArticlePage;
