

import React from 'react'

function DataViewPlatos  ({categorias}) {
    const itemTemplate = (platos) => {
        return (
            <div>

            </div>
        )
    }

  return (
    <div>
        {categorias ? (
            <DataView
                value={categorialatos}
                itemTemplate={itemTemplate}
                layout='grid'
            />    
        ) : (

            <div className="div"></div>
        )}

    </div>
  )
}

export default DataViewPlatos