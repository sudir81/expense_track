import React, {useContext} from 'react'
import { List as MList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {
    const classes = useStyles()
    const { transactons, deleteTransaction } = useContext(ExpenseTrackerContext);

    // const transactons = [
    //     {
    //         id: 1,
    //         type: "Expense",
    //         category: "Home",
    //         amount: 50,
    //         date: "Mon Feb 01 2021"
    //     },
    //     {
    //         id: 2,
    //         type: "Income",
    //         category: "Business",
    //         amount: 500,
    //         date: "Sat Feb 06 2021"
    //     },
    //     {
    //         id: 3,
    //         type: "Expense",
    //         category: "Grocery",
    //         amount: 50,
    //         date: "Mon Feb 01 2021"
    //     },
    //     {
    //         id: 24,
    //         type: "Expense",
    //         category: "Mobile",
    //         amount: 500,
    //         date: "Sat Feb 06 2021"
    //     }
    // ]

    return (
        <MList dense={false} className={classes.list}>
            {transactons && transactons.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MList>
    )
}

export default List
