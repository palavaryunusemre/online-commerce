import React from 'react'
import Categories from './Categories'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { ToastContainer } from 'react-toastify'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <ToastContainer position="bottom-right" />
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
