import React, { useState, useEffect } from 'react';
import { ConfigMenuStyle } from './ConfigMenu.styles';
import QuantityInput from '../QuantityInput';
import { Info } from '../Modals/Info';
import { useSearchParams } from 'react-router-dom';


const ConfigMenu = ({
  user,
  budget,
  onUpdateBudget
}) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const prices = {
    web: 500,
    seo: 300,
    ads: 200
  }
  const [client, setClient] = useState('');
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [pages, setPages] = useState(1);
  const [langs, setLangs] = useState(1);
  const [checkedSeo, setCheckedSeo] = useState(false);
  const [checkedAds, setCheckedAds] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    setSearchParams({
      client,
      checkedWeb,
      pages,
      langs,
      checkedSeo,
      checkedAds
    });
  }, [setSearchParams, client, checkedWeb, pages, langs, checkedSeo, checkedAds])

  useEffect(() => {
    setClient(budget?.params?.client ?? '');
    setCheckedWeb(budget?.params?.checkedWeb ?? false);
    setPages(budget?.params?.pages ?? 1);
    setLangs(budget?.params?.langs ?? 1);
    setCheckedSeo(budget?.params?.checkedSeo ?? false);
    setCheckedAds(budget?.params?.checkedAds ?? false);
  }, [budget])


  useEffect(() => {
    const priceWeb = checkedWeb ? prices.web + (pages * langs * 30) : 0;
    const priceSeo = checkedSeo ? prices.seo : 0;
    const priceAds = checkedAds ? prices.ads : 0;
    setTotalBudget(priceWeb + priceSeo + priceAds);
    console.log(pages, langs);
  }, [
    prices.web,
    prices.seo,
    prices.ads,
    totalBudget,
    checkedWeb,
    pages,
    langs,
    checkedSeo,
    checkedAds,
  ]);

  useEffect(() => {
    onUpdateBudget({
      client,
      checkedWeb,
      pages,
      langs,
      checkedSeo,
      checkedAds,
    })
  }, [
    client,
    checkedWeb,
    pages,
    langs,
    checkedSeo,
    checkedAds,
    onUpdateBudget
  ]);

  return (
    <div className="ConfigMenuWrapper">
      <ConfigMenuStyle>
        {budget && (
          <div className='form'>          
            <h2>Configura tu presupuesto, {user}.</h2>
            <h4 className='budgetName'>
              <span>Nombre de Proyecto: {budget.name}</span>
            </h4>
            <h4>Fecha del presupuesto: {budget.date}</h4>
            <h4>
              <span>Client: </span>
              <Info hidden={true} message={'Este campo permite definir el nombre del cliente.'}/>
              <input placeholder='Nombre Cliente' value={client} onChange={e => setClient(e.target.value)} className='budgetClient' type={"text"}/ >
            </h4>
            <div className='budgetOption'>
              {/* <input type={'checkbox'} checked={checked1} onChange={addFeature(featureList[0])} /> */}
              <label>
                <input type={'checkbox'} checked={checkedWeb} onChange={e => setCheckedWeb(e.target.checked)} />
                <span>Página Web ({prices.web} €):</span>              
              </label>
              <Info hidden={true} message={'Este check confirma que quiere un desarrollo web.'}/>
              {checkedWeb && (
                <div className='quantityInputBlock' style={{display:'flex', flexDirection:'column'}}>
                  <label>Número de páginas: </label>
                  <QuantityInput value={pages} onChange={setPages} caption={'En este componente debe indicar el número de páginas que tendrá su sitio web'} type={'number'} />
                  <label>Número de idiomas: </label>
                  <QuantityInput value={langs} onChange={setLangs} caption={'En este componente debe indicar el número de idiomas que tendrá su sitio web'} type={'number'} />
                </div>
              )}
            </div>
            <div className='budgetOption'>
              <label>
                <input type={'checkbox'} checked={checkedSeo} onChange={e => setCheckedSeo(e.target.checked)} />
                <span>Servicio de Consultoría SEO ({prices.seo} €)</span>
              </label>
              <Info hidden={true} message={'Este check confirma que quiere una consultoría de SEO para su sitio web.'}/>           
            </div>
            <div className='budgetOption'>
              <label>
                <input type={'checkbox'} checked={checkedAds} onChange={e => setCheckedAds(e.target.checked)} />
                <span>Campaña Google Ads ({prices.ads} €)</span>
              </label>
              <Info hidden={true} message={'Este check confirma que quiere una campaña con Google Ads.'}/>            
            </div>
            <div className='budgetOption'>
              <h4>
                <span className='totalBudget'>Total: {totalBudget} €</span>
                <Info hidden={true} message={'Aquí nos muestra el coste total de este presupuesto.'}/>
              </h4>
            </div>
          </div>
        )}
      </ConfigMenuStyle>
    </div>
  );
}

export default ConfigMenu;
