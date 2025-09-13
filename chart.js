// chart.js — Versão final adaptada ao template do professor (sem dependência de elementos pré-existentes)

async function loadData() {
    // DADOS TRATADOS (corrigidos conforme enunciado)
    const rawData = [
        { 
            Vehicle_ID: 1, Make: "Nissan", Model: "Leaf", Year: 2021, Region: "Asia", Vehicle_Type: "SUV", 
            Battery_Capacity_kWh: 101.7, "Battery_Health_%": 75.5, Range_km: 565, Charging_Power_kW: 153.6, 
            Charging_Time_hr: 0.82, Charge_Cycles: 1438, Energy_Consumption_kWh_per_100km: 12.76, Mileage_km: 117727, 
            Avg_Speed_kmh: 53.4, Max_Speed_kmh: 233, Acceleration_0_100_kmh_sec: 8.1, Temperature_C: -9.0, 
            Usage_Type: "Personal", CO2_Saved_tons: 14.13, Maintenance_Cost_USD: 969, Insurance_Cost_USD: 843, 
            Electricity_Cost_USD_per_kWh: 0.3, Monthly_Charging_Cost_USD: 375.55, Resale_Value_USD: 26483 
        },
        { 
            Vehicle_ID: 2, Make: "Nissan", Model: "Leaf", Year: 2020, Region: "Australia", Vehicle_Type: "Sedan", 
            Battery_Capacity_kWh: 30.1, "Battery_Health_%": 99.8, Range_km: 157, Charging_Power_kW: 157.2, 
            Charging_Time_hr: 0.27, Charge_Cycles: 1056, Energy_Consumption_kWh_per_100km: 15.79, Mileage_km: 161730, 
            Avg_Speed_kmh: 58.0, Max_Speed_kmh: 221, Acceleration_0_100_kmh_sec: 9.83, Temperature_C: 1.6, 
            Usage_Type: "Personal", CO2_Saved_tons: 19.41, Maintenance_Cost_USD: 1157, Insurance_Cost_USD: 1186, 
            Electricity_Cost_USD_per_kWh: 0.25, Monthly_Charging_Cost_USD: 532.02, Resale_Value_USD: 11287 
        },
        { 
            Vehicle_ID: 3, Make: "Hyundai", Model: "Kona Electric", Year: 2021, Region: "North America", Vehicle_Type: "SUV", 
            Battery_Capacity_kWh: 118.5, "Battery_Health_%": 84.0, Range_km: 677, Charging_Power_kW: 173.6, 
            Charging_Time_hr: 0.84, Charge_Cycles: 1497, Energy_Consumption_kWh_per_100km: 24.34, Mileage_km: 244931, 
            Avg_Speed_kmh: 69.4, Max_Speed_kmh: 138, Acceleration_0_100_kmh_sec: 3.6, Temperature_C: 1.5, 
            Usage_Type: "Fleet", CO2_Saved_tons: 29.39, Maintenance_Cost_USD: 291, Insurance_Cost_USD: 1890, 
            Electricity_Cost_USD_per_kWh: 0.26, Monthly_Charging_Cost_USD: 1291.68, Resale_Value_USD: 34023 
        },
        { 
            Vehicle_ID: 4, Make: "Audi", Model: "Q4 e-tron", Year: 2022, Region: "Europe", Vehicle_Type: "Hatchback", 
            Battery_Capacity_kWh: 33.1, "Battery_Health_%": 97.3, Range_km: 149, Charging_Power_kW: 169.3, 
            Charging_Time_hr: 0.25, Charge_Cycles: 1613, Energy_Consumption_kWh_per_100km: 14.7, Mileage_km: 57995, 
            Avg_Speed_kmh: 42.9, Max_Speed_kmh: 192, Acceleration_0_100_kmh_sec: 8.97, Temperature_C: 12.5, 
            Usage_Type: "Fleet", CO2_Saved_tons: 6.96, Maintenance_Cost_USD: 401, Insurance_Cost_USD: 2481, 
            Electricity_Cost_USD_per_kWh: 0.33, Monthly_Charging_Cost_USD: 234.44, Resale_Value_USD: 14398 
        },
        { 
            Vehicle_ID: 5, Make: "Tesla", Model: "Model 3", Year: 2022, Region: "Australia", Vehicle_Type: "Sedan", 
            Battery_Capacity_kWh: 81.3, "Battery_Health_%": 85.6, Range_km: 481, Charging_Power_kW: 212.8, 
            Charging_Time_hr: 0.43, Charge_Cycles: 1078, Energy_Consumption_kWh_per_100km: 22.77, Mileage_km: 17185, 
            Avg_Speed_kmh: 97.6, Max_Speed_kmh: 189, Acceleration_0_100_kmh_sec: 7.03, Temperature_C: -3.0, 
            Usage_Type: "Commercial", CO2_Saved_tons: 2.06, Maintenance_Cost_USD: 214, Insurance_Cost_USD: 2336, 
            Electricity_Cost_USD_per_kWh: 0.1, Monthly_Charging_Cost_USD: 32.61, Resale_Value_USD: 23033 
        },
        { 
            Vehicle_ID: 6, Make: "Hyundai", Model: "Ioniq 5", Year: 2021, Region: "North America", Vehicle_Type: "Sedan", 
            Battery_Capacity_kWh: 68.1, "Battery_Health_%": 81.8, Range_km: 312, Charging_Power_kW: 14.4, 
            Charging_Time_hr: 4.73, Charge_Cycles: 591, Energy_Consumption_kWh_per_100km: 21.48, Mileage_km: 134312, 
            Avg_Speed_kmh: 72.4, Max_Speed_kmh: 235, Acceleration_0_100_kmh_sec: 5.83, Temperature_C: -4.2, 
            Usage_Type: "Commercial", CO2_Saved_tons: 16.12, Maintenance_Cost_USD: 334, Insurance_Cost_USD: 700, 
            Electricity_Cost_USD_per_kWh: 0.25, Monthly_Charging_Cost_USD: 601.05, Resale_Value_USD: 19412 
        },
        { 
            Vehicle_ID: 7, Make: "Ford", Model: "F-150 Lightning", Year: 2021, Region: "Asia", Vehicle_Type: "Truck", 
            Battery_Capacity_kWh: 38.6, "Battery_Health_%": 81.1, Range_km: 206, Charging_Power_kW: 170.2, 
            Charging_Time_hr: 0.27, Charge_Cycles: 925, Energy_Consumption_kWh_per_100km: 23.53, Mileage_km: 206664, 
            Avg_Speed_kmh: 56.8, Max_Speed_kmh: 176, Acceleration_0_100_kmh_sec: 8.14, Temperature_C: 28.0, 
            Usage_Type: "Fleet", CO2_Saved_tons: 24.8, Maintenance_Cost_USD: 1441, Insurance_Cost_USD: 1002, 
            Electricity_Cost_USD_per_kWh: 0.29, Monthly_Charging_Cost_USD: 1175.18, Resale_Value_USD: 13983 
        },
        { 
            Vehicle_ID: 8, Make: "Audi", Model: "e-tron", Year: 2021, Region: "Australia", Vehicle_Type: "Sedan", 
            Battery_Capacity_kWh: 33.6, "Battery_Health_%": 91.3, Range_km: 141, Charging_Power_kW: 116.0, 
            Charging_Time_hr: 0.39, Charge_Cycles: 1063, Energy_Consumption_kWh_per_100km: 20.27, Mileage_km: 112059, 
            Avg_Speed_kmh: 69.4, Max_Speed_kmh: 133, Acceleration_0_100_kmh_sec: 9.4, Temperature_C: 2.5, 
            Usage_Type: "Fleet", CO2_Saved_tons: 13.45, Maintenance_Cost_USD: 948, Insurance_Cost_USD: 2178, 
            Electricity_Cost_USD_per_kWh: 0.28, Monthly_Charging_Cost_USD: 530.0, Resale_Value_USD: 14121 
        }
    ];

    // Função para filtrar dados
    function filterData() {
        const usageFilter = document.getElementById('usageFilter')?.value || 'all';
        const regionFilter = document.getElementById('regionFilter')?.value || 'all';

        return rawData.filter(row => {
            const matchesUsage = usageFilter === 'all' || row.Usage_Type === usageFilter;
            const matchesRegion = regionFilter === 'all' || row.Region === regionFilter;
            return matchesUsage && matchesRegion;
        });
    }

    // Função para obter cores baseadas na saúde da bateria
    function getBatteryColor(health) {
        if (health >= 90) return '#27ae60'; // verde
        if (health >= 80) return '#f39c12'; // laranja
        return '#e74c3c'; // vermelho
    }

    // Função para calcular tamanho do ponto (resale value)
    function getPointSize(resale) {
        return Math.sqrt(resale / 1000); // Escala logarítmica suave
    }

    // =============================
    // INICIAR GRAFICO ECHARTS
    // =============================
    const dom = document.getElementById('container');
    const myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });

    myChart.showLoading();

    // Criar controles de filtro DINÂMICAMENTE (abaixo do container)
    const controlsDiv = document.createElement('div');
    controlsDiv.innerHTML = `
        <div style="margin: 20px 0; padding: 15px; background-color: #ecf0f1; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 20px;">
            <div style="display: flex; flex-direction: column; min-width: 200px;">
                <label style="font-weight: bold; margin-bottom: 5px; color: #2c3e50;">Filtrar por Tipo de Uso:</label>
                <select id="usageFilter">
                    <option value="all">Todos</option>
                    <option value="Fleet">Frota</option>
                    <option value="Personal">Pessoal</option>
                    <option value="Commercial">Comercial</option>
                </select>
            </div>
            <div style="display: flex; flex-direction: column; min-width: 200px;">
                <label style="font-weight: bold; margin-bottom: 5px; color: #2c3e50;">Filtrar por Região:</label>
                <select id="regionFilter">
                    <option value="all">Todas</option>
                    <option value="Asia">Ásia</option>
                    <option value="Australia">Austrália</option>
                    <option value="North America">América do Norte</option>
                    <option value="Europe">Europa</option>
                </select>
            </div>
            <div style="display: flex; flex-direction: column; min-width: 200px;">
                <label style="font-weight: bold; margin-bottom: 5px; color: #2c3e50;">Mostrar Custos Mensais:</label>
                <input type="checkbox" id="showCosts" checked>
                <label for="showCosts" style="margin-left: 5px; vertical-align: middle;">Ativar gráfico de custos</label>
            </div>
        </div>
    `;
    // Insere os controles logo após o container
    dom.parentNode.insertBefore(controlsDiv, dom.nextSibling);

    // Criar legenda abaixo dos controles
    const legendDiv = document.createElement('div');
    legendDiv.innerHTML = `
        <div style="display: flex; justify-content: center; margin: 15px 0; flex-wrap: wrap; gap: 20px;">
            <div style="display: flex; align-items: center; margin: 0 10px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #27ae60; margin-right: 5px;"></div>
                <span>Saúde da Bateria > 90%</span>
            </div>
            <div style="display: flex; align-items: center; margin: 0 10px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #f39c12; margin-right: 5px;"></div>
                <span>80% - 90%</span>
            </div>
            <div style="display: flex; align-items: center; margin: 0 10px;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #e74c3c; margin-right: 5px;"></div>
                <span>< 80%</span>
            </div>
        </div>
    `;
    dom.parentNode.insertBefore(legendDiv, controlsDiv.nextSibling);

    // Criar gráfico de custos (barra empilhada) dinamicamente
    let costChart = null;

    function updateCostChart() {
        if (!document.getElementById('showCosts')?.checked) {
            if (costChart) {
                costChart.dispose();
                costChart = null;
            }
            return;
        }

        if (!costChart) {
            const costContainer = document.createElement('div');
            costContainer.style.height = '200px';
            costContainer.style.margin = '20px 0';
            costContainer.style.border = '1px solid #ddd';
            costContainer.style.borderRadius = '8px';
            costContainer.style.overflow = 'hidden';
            costContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            dom.parentNode.insertBefore(costContainer, legendDiv.nextSibling);
            costChart = echarts.init(costContainer);
        }

        const filteredData = filterData();
        const fleetData = filteredData.filter(d => d.Usage_Type === "Fleet");
        const personalData = filteredData.filter(d => d.Usage_Type === "Personal");

        const categories = ["Custo Mensal", "Manutenção", "Seguro"];
        const fleetValues = [
            fleetData.reduce((sum, d) => sum + d.Monthly_Charging_Cost_USD, 0),
            fleetData.reduce((sum, d) => sum + d.Maintenance_Cost_USD, 0),
            fleetData.reduce((sum, d) => sum + d.Insurance_Cost_USD, 0)
        ];
        const personalValues = [
            personalData.reduce((sum, d) => sum + d.Monthly_Charging_Cost_USD, 0),
            personalData.reduce((sum, d) => sum + d.Maintenance_Cost_USD, 0),
            personalData.reduce((sum, d) => sum + d.Insurance_Cost_USD, 0)
        ];

        const option = {
            title: {
                text: 'Custos Médios por Tipo de Uso (Frota vs Pessoal)',
                left: 'center',
                textStyle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            legend: {
                data: ['Frota', 'Pessoal'],
                bottom: '0%'
            },
            xAxis: {
                type: 'category',
                data: categories,
                axisLabel: { rotate: 0 }
            },
            yAxis: {
                type: 'value',
                name: 'Custo (USD)',
                nameLocation: 'middle',
                nameGap: 30
            },
            series: [
                {
                    name: 'Frota',
                    type: 'bar',
                    stack: 'total',
                    barWidth: 20,
                    data: fleetValues,
                    itemStyle: { color: '#3498db' }
                },
                {
                    name: 'Pessoal',
                    type: 'bar',
                    stack: 'total',
                    barWidth: 20,
                    data: personalValues,
                    itemStyle: { color: '#e74c3c' }
                }
            ]
        };

        costChart.setOption(option);
    }

    // Atualizar gráfico principal
    function updateMainChart() {
        const filteredData = filterData();

        const seriesData = filteredData.map(item => ({
            value: [
                item.Battery_Capacity_kWh,
                item.Range_km,
                item.Resale_Value_USD,
                item["Battery_Health_%"]
            ],
            name: `${item.Make} ${item.Model} (${item.Year})`,
            itemStyle: {
                color: getBatteryColor(item["Battery_Health_%"])
            },
            symbolSize: getPointSize(item.Resale_Value_USD),
            tooltip: {
                formatter: `
                    <b>${item.Make} ${item.Model} (${item.Year})</b><br/>
                    Região: ${item.Region}<br/>
                    Tipo: ${item.Vehicle_Type}<br/>
                    Capacidade: ${item.Battery_Capacity_kWh.toFixed(1)} kWh<br/>
                    Autonomia: ${item.Range_km} km<br/>
                    Valor de Revenda: $${item.Resale_Value_USD.toLocaleString()}<br/>
                    Saúde da Bateria: ${item["Battery_Health_%"].toFixed(1)}%<br/>
                    Custo Mensal: $${item.Monthly_Charging_Cost_USD.toFixed(2)}<br/>
                    Manutenção: $${item.Maintenance_Cost_USD}<br/>
                    Uso: ${item.Usage_Type}
                `
            }
        }));

        const option = {
            title: {
                text: 'Capacidade da Bateria vs Autonomia (tamanho = valor de revenda, cor = saúde da bateria)',
                left: 'center',
                textStyle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' }
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#ccc',
                borderWidth: 1,
                padding: 10,
                textStyle: { fontSize: 13 }
            },
            xAxis: {
                name: 'Capacidade da Bateria (kWh)',
                type: 'value',
                nameLocation: 'middle',
                nameGap: 20,
                nameTextStyle: { fontSize: 14 }
            },
            yAxis: {
                name: 'Autonomia (km)',
                type: 'value',
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: { fontSize: 14 }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                dimension: 3,
                inRange: {
                    color: ['#e74c3c', '#f39c12', '#27ae60']
                }
            },
            series: [{
                type: 'scatter',
                data: seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                symbolSize: function (val) {
                    return getPointSize(val[2]);
                },
                itemStyle: {
                    opacity: 0.8
                }
            }],
            grid: {
                left: '8%',
                right: '8%',
                top: '15%',
                bottom: '10%'
            }
        };

        myChart.setOption(option);
    }

    // Eventos de interação
    document.getElementById('usageFilter').addEventListener('change', () => {
        updateMainChart();
        updateCostChart();
    });

    document.getElementById('regionFilter').addEventListener('change', () => {
        updateMainChart();
        updateCostChart();
    });

    document.getElementById('showCosts').addEventListener('change', () => {
        updateCostChart();
    });

    // Inicializa os gráficos
    updateMainChart();
    updateCostChart();

    myChart.hideLoading();

    // Redimensionar ao resize da janela
    window.addEventListener('resize', () => {
        myChart.resize();
        if (costChart) costChart.resize();
    });
}

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadData);