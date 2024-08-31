export interface QuoteResponse {
    exchangeRate: number;  // Tasa de cambio
    inverseExchangeRate: number;  // Tasa de cambio inversa
    finalAmount: number;  // Monto final convertido
    initialCurrency: string;  // Moneda inicial (ej. "COP")
    finalCurrency: string;  // Moneda final (ej. "USD")
    initialAmount: number;  // Monto inicial
    createdAt: string;  // Fecha de creación (formato ISO 8601)
    expiresAt: string;  // Fecha de expiración (formato ISO 8601)
    exchangeConfirmationToken: string;  // Token de confirmación de la transacción
    transactionCost: number;  // Coste de la transacción
    id: string;  // ID único de la transacción
}