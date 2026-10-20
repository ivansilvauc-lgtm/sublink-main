@echo off
REM ============================================================
REM  APLICAR CAMBIOS SUBLINK — doble click para ejecutar
REM  Debe estar guardado DENTRO de la carpeta SUBLINK-MAIN
REM ============================================================
cd /d "%~dp0"
echo.
echo === Paso 1: borrando archivo obsoleto (51.pdf) ===
if exist "public\assets\logos-clientes\51.pdf" (
    del "public\assets\logos-clientes\51.pdf"
    echo    OK: 51.pdf eliminado
) else (
    echo    (ya no existe, OK)
)
echo.
echo === Paso 2: git add + commit + push ===
git add -A
git commit -m "fixes: hero, nav, footer, telas, servicios, reviews, logos"
git push
echo.
echo === HECHO ===
echo Revisa Vercel en 1-2 minutos: https://vercel.com/dashboard
pause
