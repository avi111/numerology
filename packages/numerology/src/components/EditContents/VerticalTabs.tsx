import React, {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import {Box, Tab, Tabs, Theme} from "@material-ui/core";
import {categoryItems} from "../../models/remoteContent/categories";
import {makeStyles} from "@material-ui/core/styles";
import TabPanel from "./TabPanel";
import ContentsForm from "./ContentsForm";

const a11yProps = (index: any) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const VerticalTabs = () => {
    const {getWord} = useContext(LanguageContext);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label={getWord('contents editor')}
                className={classes.tabs}
            >
                {Object.values(categoryItems).map((c, i) => {
                    return (
                        <Tab key={i} label={getWord(c.name)} {...a11yProps(i)} />
                    )
                })}
            </Tabs>
            <Box flex={1}>
                {Object.values(categoryItems).map((c, i) => {
                    return (
                        <TabPanel value={value} index={i} key={i}>
                            <ContentsForm category={c}/>
                        </TabPanel>
                    );
                })}
            </Box>
        </div>
    );
};

export default VerticalTabs