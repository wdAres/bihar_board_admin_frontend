import React from 'react'
import classes from './Tile.module.css'
import CountUp from 'react-countup';
import { Statistic } from 'antd'
import { abbreviateNumber } from "js-abbreviation-number";
import Container from '../UI/Container';

const Tile = ({ label, value,prefix,suffix , icon , iconBg , iconShadow }) => {

    function separateNumberAndLetter(input) {
        const matches = input.match(/^([\d.]+)([a-zA-Z]*)$/);
        if (matches) {
            const [, numericPart, letterPart] = matches;
            return [numericPart, letterPart];
        }
            return false
    }

    // const formatter = (value) => <CountUp end={value} separator=","  />;
    const formatter = value => {
        let val = abbreviateNumber(value,2)
        if (separateNumberAndLetter(val)) {
            const [num,letter] = separateNumberAndLetter(val)
            return  <CountUp end={num} suffix={letter} separator="," decimals={letter? 2 : 0}  />
        }else{
            return <CountUp end={val} separator="," decimals={0}  />
        }
    }

    return (
        <Container cls={classes.myTile}>
                <div
                style={{
                    background:iconBg,
                    boxShadow:`0 0 1px 6px ${iconShadow}`
                }}
                className={classes.icon_container}>
                    {icon}
                </div>
                <Statistic suffix={suffix} prefix={prefix}  className={classes.innerTile} title={label} value={value} formatter={formatter} />
        </Container>
    )
}

export default Tile
