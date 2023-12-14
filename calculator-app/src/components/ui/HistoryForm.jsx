import React from 'react'
import { useCalculateHistory } from '../../contexts/CalculateHistoryContext'
import CalculateResultItem from './CalculateResultItem';

const HistoryForm = ({onClick}) => {

    const histories = useCalculateHistory();

  return (
    <div>
        {histories.map((history, index) => 
        <CalculateResultItem key={index} history={history} onClick={onClick}></CalculateResultItem>)}
    </div>
  )
}

export default HistoryForm