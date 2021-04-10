import React, {useContext} from 'react';
import "./_EditContents.scss";
import {Box, Tab, Tabs, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {categoryItems} from "../../models/remoteContent/categories";
import {LanguageContext} from "../../contexts/LanguageContext";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index: any) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
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
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {Object.values(categoryItems).map((c, i) => {
                    return (
                        <Tab label={getWord(c.name)} {...a11yProps(i)} />
                    )
                })}
            </Tabs>
            {Object.values(categoryItems).map((c, i) => {
                return (
                    <TabPanel value={value} index={i}>
                        Item {i}
                    </TabPanel>
                );
            })}
        </div>
    );
};

function EditContents() {
    return (<Box className="EditContents">
        <VerticalTabs/>
    </Box>);
}

export default EditContents;
