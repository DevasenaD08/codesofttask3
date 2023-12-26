
        function appendToResult(value) {
            document.getElementById('expression').value += value;
        }

        function clearResult() {
            document.getElementById('expression').value = '';
        }

        function calculateResult() {
            var expression = document.getElementById('expression').value;
            try {
                var result = eval(expression);

                document.getElementById('expression').value = expression + ' = ' + result;
            } catch (error) {
                document.getElementById('expression').value = 'Error';
            }
        }

        document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                calculateResult();
            }
        });
    